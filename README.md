# Kraken
A central hub where teams can work, plan, and achieve amazing things together.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
```
Python Python 3.6.7
Node v10.15.3
```

### Installing
Clone The Project
```
git clone https://github.com/chamsou123/Kraken
cd Kraken
```

Run setup.sh to setup the backend
```
chmod +x ./setup.sh
./setup.sh
```

Install npm dependencies
```
npm install
```

Run Django server
```
cd backend
source ./env/bin/activate
python manage.py runserver
```

Run Electron
```
npm start
```

## Built With

* [Django](https://www.djangoproject.com/) - The web framework used for Backend
* [Electron](https://electronjs.org) - Used for The GUI
* [React](https://reactjs.org/) - Used For The Frontend
* [GraphQl](https://graphql.org/) - Used For The API

## Authors

* **Chams AGOUNI** - *Initial work* - [Chamsou123](https://github.com/chamsou123)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
