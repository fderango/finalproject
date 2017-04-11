This is Frank Derango's final coding temple project

Installation Steps

1. Create a virtual environment called "backend"

2. yse the virtual environment by calling backend/scripts/activate

3. Change directories to the backend folder.

4. Install Depenendencies

pip install django
pip install djangorestframework
pip install markdown
pip install django-filter
pip install pillow
pip install django-allauth

5. Run base migrations
python manage.py migrate

6. Create a super user
python manage.py createsuperuser --username=[name] --email=[email]
You'll be prompted to enter a password as well
