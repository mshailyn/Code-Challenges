//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"

function getDomain(url){
  let ans = url.replace('www.', '')
  ans = ans.replace('http://', '')
  ans= ans.replace('https://', '')
  ans = ans.replace('.', ' ')
  return ans.split(' ')[0]
  }