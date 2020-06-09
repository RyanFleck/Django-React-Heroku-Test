# Django-React-Heroku-Test

This implements the **"Electoral"** voting application, which when finished will
use Django and Postgres for the backend, and React with Typescript for the frontend.

Live demo running here: <https://rcf-electoral.herokuapp.com/>

**Done:**

1. Set up Django app
1. Set up React app
1. Get data from Django in React with Axios
1. Set up Postgres database in Django
1. Create test model and ensure database works
1. Convert React app to Typescript
1. Add react-router
1. POST data to backend from frontend, on prod & dev.

**ToDo:**

1. Add Google OAuth for gapps-domain authentication

## Development

Before development, add a `.env` file with the following contents:

```
DATABASE_URL=postgres:// (insert heroku postgres URL)
```

To develop, run in separate terminal windows:

```
# Window 0
python manage.py runserver

# Window 1
cd electoral-frontend
yarn start
```

## Resources

1. [Primary
   tutorial](https://librenepal.com/article/django-and-create-react-app-together-on-heroku/)
1. [Axios with React](https://alligator.io/react/axios-react/)
1. [Django docs- returning JSON](https://docs.djangoproject.com/en/3.0/ref/request-response/#jsonresponse-objects)
1. [Authentication with
   Google](https://medium.com/trabe/oauth-authentication-in-django-with-social-auth-c67a002479c1)
