import cookie from 'js-cookie'

const Token = 'Admin-Token';

export function getToken()
{
    return cookie.get(Token);
}

export function setToken(val)
{
    return cookie.set(Token , val);
}

export function delToken()
{
    return cookie.remove(Token);
}


