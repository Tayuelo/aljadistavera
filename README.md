

### HEROKU COMMANDS

## To deploy
```git push heroku-dev main```

## To 'stop' app
```heroku ps:scale web=0```

## To 'awake' app
```heroku ps:scale web=1```

## To add an environment variable
```heroku config:set <VAR_NAME>=<value>```
