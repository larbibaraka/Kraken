#!/bin/bash
cd backend
virtualenv -p python3 env
source ./env/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py makemigrations Tasks Columns
python manage.py migrate
