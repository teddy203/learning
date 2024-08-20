address = 'amosnyaundi4@gmail.com'

# name, domain = address.split('@')
# data = address.split('@')
# domain = data[1]
# name = data[0]

# slicing
# domain = address[13:]

# startswith
atPosition = address.find('@')

domain = address[atPosition + 1:]

print(domain)
# gmail.com