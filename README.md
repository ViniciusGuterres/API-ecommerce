# API-ecommerce

Como inicar o projeto:

1° criar um arquivo "settings.js" na raiz do projeto:

```
module.exports = {
    "server": {
        "port": 3001,
    },
    "db": {
        "mongodb": {
            "host": "0.0.0.0",
            "port": 27017,
            "database": "api-ecommerce" 
        }
    }
};
```

2° rodar o comando: node server.js
