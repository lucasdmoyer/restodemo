import json
from pprint import pprint

import requests

url = "https://fcm.googleapis.com/fcm/send"
message = "Yoyoyo"

with open('restodemo-lucas-export.json') as f:
    data = json.load(f)

for id in data["fcmTokens"]:
    print(data["fcmTokens"][id])
    to = data["fcmTokens"][id]
    payload = "{\n\t\"notifcation\": {\n\t\t\"title\": \"hello world\",\n\t\t\"body\": \"Enjoy your coffee\"\n\t},\n\t\"to\":\""+to+"\",\n\t\"collapse_key\":\"type_a\",\n\t\"data\" : {\n     \"body\" : \"Hey Lucas\",\n     \"title\": \"Title of Your Notification in Title\"\n\t}\n}"
    headers = {
        'Authorization': "key=AAAALFAGDEs:APA91bEACwdhcPVD6D7rLZXKRV_i-xtEg41YcOqqQvDWf_jhHF_cEaXZpxi5e5_qjf8W_S2S4RwxIuwdeHkybPIP5lGSol2OQZ8A6hy3i-E7fK5INC_8qcy_DoyMjxvQta5w8s1kC-Km",
        'Content-Type': "application/json",
        'cache-control': "no-cache",
        'Postman-Token': "63bb2fdf-f7be-4ad9-afa1-735974042bdb"
        }

    response = requests.request("POST", url, data=payload, headers=headers)