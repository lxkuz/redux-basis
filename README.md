#### Staging [bangbang.mystand.ru](https://bangbang.mystand.ru/)

#### Production [bangbang.do](https://bangbang.do/)

### Installation

(Or look Docker section)

```bash
yarn install
cp src/config.js.example src/config.js
```

### Development Usage

```bash
yarn start
Open http://localhost:4000
```

### Production Build

```bash
yarn run build
```

### Linting

ESLint with React linting options have been enabled.

```bash
yarn run lint
```

### Docker

Build container
```bash
docker build --force-rm -t dr.mystand.ru/dfo-pm/frontend:master . 
```

Container exposes 80 port and requires /repository/src/config to be mounted. </br>
Run example:
```bash
docker run -p 4000:80 \
           -v $(pwd)/src/config.js:/repository/src/config.js \ 
           dr.mystand.ru/dfo-pm/frontend:master 
```

Docker compose example:
```yaml
version: '2'
services:
  frontend:
    image: dr.mystand.ru/bangbang/frontend:master 
    port: 4000
    volumes:
      ./src/config.js:/repository/src/config.js
```