import re 



text = "Visit us at https://zinduaschool.com for more information"
pattern = r"https?://\S+"
url = re.findall(pattern, text)
print("URLs found: ", url)
