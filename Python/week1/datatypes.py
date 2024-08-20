# Integers: Numbers with no decimals
userAge = 20
mobileNumber = 123456789

# Float: numbers that have decimal parts
userHeight = 2.8254
userWeight = 67.2
#print(userWeight)

# String: refers to text
userName = 'Amos'
userName2 = "Ngisa"

#print(userName + userName2)

# String formating
message = 'The name of our teacher is %s and he is %d years old. He is %.2f meters tall.'%(userName,userAge,userHeight)
#print(message)

message2 = 'The name of our teacher is {0:s} and he is {1:d} years old. He is {2:.2f} meters tall'.format(userName, userAge, userHeight)
# print(message2)

#List: collection of data
ageList = [21,22,23,24,25,26]
amosAge = ageList[2:4] #23,24
print(amosAge)
# modify list
ageList[2] = 28
# add item to list
ageList.append(30)
# remove item from list
del ageList[0]
# print(ageList)

#Tuple: similar as list but you cannot modify their values
monthOfYear = ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
month = monthOfYear[-1]

# del in tuple
# del monthOfYear
# in: check if an item in tuple
confirm = 'Feb' in monthOfYear
# len(): find number of items in a tuple
items = len(monthOfYear)
# concant +
# added = monthOfYear + ("Shawn", "Joan", "Allan")
# multiplication
multi = monthOfYear * 3
# print(multi)

# print(confirm)

#Dictionary
myDictionary = {"Shawn":21, "Allan":18, "Joan": 18}
userNames = dict(Amos = 26, Jeremiah = 18)
# print(userNames["Joan"]) #18
myDictionary["Shawn"] = 22 #modify or update
myDictionary["Teddy"] = 19 #adding new item
# del myDictionary["Joan"] #remove item
# myDictionary.clear() #remove everything
# del myDictionary #delete entire dictionary
# print(myDictionary.get("Allan", 'Not Found!'))
jua = 'Shawn' in myDictionary #check an item
kalist = myDictionary.items() #retun pairs as tuple
kakey = myDictionary.keys() #retun keys of the dictionary
urefu = len(myDictionary) #find number of items
myDictionary.update(userNames) #add one dictionary key pairs to another
tuvalue = myDictionary.values() #return dictionary's values
# print(kalist)    



#type casting: converting from one data type to another. we use inbuilt functions; float(), int(), str()
height = int(userHeight)
age = int(userAge)
age2 = float(userAge)
# print(age2)
# print(str(userHeight))