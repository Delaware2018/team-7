import csv

with open('goodwillDatabase.csv', mode='w') as csv_file:
    fieldnames = ['name', 'username', 'phone_number', 'main_store']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
