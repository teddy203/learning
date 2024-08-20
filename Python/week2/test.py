import json

jsonString = '{ "name": "Shawn","age": 21,"is_dating": false,"hobbies": ["Kayaking","Football"]}'

jstring = json.loads(jsonString)

print(jstring["hobbies"])
    
    
    