//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"

function domainName(url){
    let ans = url.includes('www.') ? url.replace('www.', ' ') : url.replace('//',' ')
    ans = ans.replace('.', ' ')
    return url.includes('www.') || url.includes('http') ?  ans.split(' ')[1] : ans.split(' ')[0]
  }