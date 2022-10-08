# Kushtay

Link shortener api written in express.js

## Usage

To generate a link you should send a `POST` request to `/create` route. You will receive a json response with this schema:

```
{
  link: string; // A href that you can share with others
  createdAt: string; // ISO date that you created the link
}
```

> only supports **ftp**, **http** and **https** protocols

<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![String Phone license](https://img.shields.io/github/license/KhashayarKhm/kushtay)

</div>
