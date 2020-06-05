# -*- coding: utf-8 -*-
from urllib.request import Request, urlopen
import re
import webbrowser

user_agent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; en-US) AppleWebKit/534.3 (KHTML, like Gecko) Chrome/6.0.472.63 Safari/534.3'
headers = { 'User-Agent' : user_agent }

print("""
   

 _______  __    __    ______  __  ___     __  ___      _______..___  ___.  __      
|   ____||  |  |  |  /      ||  |/  /    |  |/  /     /       ||   \/   | |  |     
|  |__   |  |  |  | |  ,----'|  '  /     |  '  /     |   (----`|  \  /  | |  |     
|   __|  |  |  |  | |  |     |    <      |    <       \   \    |  |\/|  | |  |     
|  |     |  `--'  | |  `----.|  .  \     |  .  \  .----)   |   |  |  |  | |  `----.
|__|      \______/   \______||__|\__\    |__|\__\ |_______/    |__|  |__| |_______|
                                                                                   

                                                                                   
                                                                                                                                                                
  \n\n                                                                                                
""")
input = input("Syötä ksml:n salaama sivu: ")
req = Request(input, None, headers)

response = urlopen(req)
page = response.read()

response.close()
html = page.decode('utf8')
match = re.findall(r"\<!-- https://www.ksml.fi(.*?)\-->",html)
alku = "https://www.ksml.fi"
print(match)
match = str(match[0])


sivu = alku + match
print(sivu)

webbrowser.open(sivu)


