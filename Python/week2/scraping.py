import requests
from bs4 import BeautifulSoup
import pandas as pd

jumia_url = "https://www.jumia.co.ke/" 

response = requests.get(jumia_url)

if response.status_code == 200:
    print("Successfully accessed the Jumia website!")
else:
    print(f"Failed to access the website. Status code: {response.status_code}")
    exit()

soup = BeautifulSoup(response.content, 'html.parser')

deals_section = soup.find('div', {'class': '-pbm -pvl'})  # Use correct class for 'Deals of the Week' section

product_names = []
brand_names = []
prices = []
discounts = []
num_reviews = []
ratings = []


if deals_section:
    
    products = deals_section.find_all('article', class_='prd _fb col c-prd')

    for product in products:
        
        name = product.find('h3', class_='name').get_text(strip=True)
        product_names.append(name)

        brand = product.get('data-brand')
        brand_names.append(brand)   

        price = product.find('div', class_='prc').get_text(strip=True)
        prices.append(price)

        discount = product.find('div', class_='bdg _dsct')
        discounts.append(discount.get_text(strip=True) if discount else '0%')

        reviews = product.find('div', class_='rev').get_text(strip=True) if product.find('div', class_='rev') else '0'
        num_reviews.append(reviews)

        rating = product.find('div', class_='stars _s')
        ratings.append(rating.get('data-score') if rating else '0')

else:
    print("Deals of the Week section not found on the page.")

data = pd.DataFrame({
    'Product Name': product_names,
    'Brand Name': brand_names,
    'Price (Ksh)': prices,
    'Discount (%)': discounts,
    'Total Reviews': num_reviews,
    'Rating (out of 5)': ratings
})


data.to_csv('jumia_deals.csv', index=False)

data['Adjusted Rating'] = data.apply(lambda row: min(5, float(row['Rating (out of 5)']) + 1) if int(row['Total Reviews']) > 100 else float(row['Rating (out of 5)']) - 1, axis=1)

popular_products = data[data['Total Reviews'].astype(int) > 50]  # Products with more than 50 reviews
print("Popular Products to Consider Selling:")
print(popular_products)

    