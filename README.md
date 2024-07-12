<div align="center">
    <img src ="assets-doc\logo.png" style="width: 200px; ">

### **BOLD HUMANITIY**

![Tiktok](https://img.shields.io/badge/Tiktok-black?logo=Tiktok&link=tiktok.com)
![Instagram](https://img.shields.io/badge/Instagram-purple?logo=instagram&link=instagram.com)
![X](https://img.shields.io/badge/X-black?logo=x&link=twitter.com)
![Youtube](https://img.shields.io/badge/Youtube-red?logo=youtube&link=youtube.com)
![Facebook](https://img.shields.io/badge/Facebook-blue?logo=facebook&link=facebook.com)

</div>

# Vogue Verve

**Vogue Verve** is a dynamic and innovative company specializing in high-end fashion and lifestyle products. **Vogue Verve Website** is a website that describe about philosopies and products from Vogue Verve.

You can access website by click this link: 

[Vogue Verve Website](https://vogueverve.site/)

# About Website

Website was designed by its philosophy and tagline "Bold Humanity". So i designed the website with uniqueness than regular website. Here are the process of making this website.

1. Searching for inspirations.

    On this step, i searched alot of inspirations from other website and then i documented it to Notepad or Pinterest.

2. Design UI with Figma.
    
    I designed UI with Figma. i created three different layouts (Mobile, tablet, and desktop). I also designed for dark-mode. Here is the design board.

    <img src="./assets-doc/doc-4.png" style="width: 300px" alt="Design board">

3. Implement it to HTML and CSS.
    First, i made HTML. In HTML, i divided it to several parts by its section to make building process easier. I also add meta tags. After that, i styled the HTML using CSS. You can check files on this repository. There are some features that needs javascript. There are navigation menu that turn into burger button when layout width is under 1280px. There are some animations that use javascript to trigger it with IntersectionObserver API. Font that i used is Noto Sans and Roboto from Google fonts and icons format is SVG.

    **There is no libraries usage in this project**.

    <img src="./assets-doc/doc-5.png" style="width: 300px" alt="HTML and CSS">

4. Push to Github repository.

    Did not forget to push to remote repository

5. Deploy with Netlify.

    For deployment, i used Netlify that connected to my Github repository. You can see deployment process in [How To Connect Github to Netlify](#how-to-connect-github-to-netlify) section.

6. Custome domain.

    I bought custome domain on Niagahoster and applied it to Netlify. You can see set custome domain process in [How To Connect Custome Domain and DSN](#how-to-connect-custome-domain-and-dsn) section.

7. Check for Lighthouse score.

    I used Lighthouse to evaluate my website performance and other important aspects. I evaluated it untill get higher score. Here my last score on Lighthouse :
    #### Lighthouse score on dekstop
    <img src="./assets-doc/doc-6.png" style="width: 300px" alt="Design board">

    #### Lighthouse score on mobile
    <img src="./assets-doc/doc-7.png" style="width: 300px" alt="Design board">

# About Repository

 You can open project buy run **index.html** on ***src*** folder.

# Features

### Responsive Layout
Website implements responsive layouts for dekstop, tablet and mobile phone.

1. Dekstop (min-width: 1280px).

    <img src="./assets-doc/doc-1.png" style="width: 300px" alt="Dekstop layout">

2. Tablet (width: 843px - 1280px).

    <img src="./assets-doc/doc-2.png" style="width: 300px" alt="Tablet layout">

3. Mobile phone (max-width: 843px).

    <img src="./assets-doc/doc-3.png" style="width: 300px">


### Light Mode and Dark Mode
Website implements light mode and dark mode that can be change by click the mode button on top-right side. Here are the differents :

| Light Mode    | Dark Mode | 
| :---:       |    :----:   |
| <img src="./assets-doc/doc-1.png" style="width: 250px" alt="Light Mode"> |  <img src="./assets-doc/dark-1.png" style="width: 250px" alt="dark Mode"> |
| <img src="./assets-doc/light-2.png" style="width: 250px" alt="Light Mode"> |  <img src="./assets-doc/dark-2.png" style="width: 250px" alt="dark Mode"> |
| <img src="./assets-doc/light-3.png" style="width: 250px" alt="Light Mode"> |  <img src="./assets-doc/dark-3.png" style="width: 250px" alt="dark Mode"> |
| <img src="./assets-doc/light-4.png" style="width: 250px" alt="Light Mode"> |  <img src="./assets-doc/dark-4.png" style="width: 250px" alt="dark Mode"> |
| <img src="./assets-doc/light-5.png" style="width: 250px" alt="Light Mode"> |  <img src="./assets-doc/dark-5.png" style="width: 250px" alt="dark Mode"> |

### Navigate Between Pages

You can navigate between pages by click a navigate button on the right side.  
<div align="center"><img src="./assets-doc/nav.png" style="width: 30px"></div>

--- 

## How To Connect Github to Netlify
1. Register Netlify account or if you already have one, you can login. If you want to register you have to prepare your identity card (KTP).
    <img src="./assets-doc/register-1.png" alt="Register netlify" style="width: 400px">
2. On home page, click "Add new site" and then click "Import an existing project".
    <img src="./assets-doc/register-2.png" alt="Register netlify" style="width: 400px">

3. And connect to your Github profile. Make sure to set "Public" your repository that want you to deploy.

    <img src="./assets-doc/register-3.png" alt="Register netlify" style="width: 400px">

4. Click the repository that you want to deploy.
<img src="./assets-doc/register-4.png" alt="Register netlify" style="width: 400px">

5. Fill site name and base directory (directory that contains index.html)
<img src="./assets-doc/register-5.png" alt="Register netlify" style="width: 400px">
<img src="./assets-doc/register-6.png" alt="Register netlify" style="width: 400px">
<img src="./assets-doc/register-7.png" alt="Register netlify" style="width: 400px">

6. Wait untill deployment finish. After that you will have an url of your site. 

## How To Connect Custome Domain and DSN
1. Register to Niagahoster, or if you already have an account you can login.
<img src="./assets-doc/domain-1.png" alt="Custome Domain" style="width: 400px">

2. First , check your domain name availability. You will get some of domains. In this case, we use domain **moviefiesta.site**. And then click. After that you will be directed to payment menu.
<img src="./assets-doc/domain-2.png" alt="Custome Domain" style="width: 400px">

3. After finish payment. Go to account profile. And go to Domain section. On Domain page, you will see your custome domain. and than click "Manage/Kelola"
<img src="./assets-doc/domain-3.png" alt="Custome Domain" style="width: 400px">
<img src="./assets-doc/domain-4.png" alt="Custome Domain" style="width: 400px">

4. Go to your netlify project page. And then go to Domain Management.
<img src="./assets-doc/domain-5.png" alt="Custome Domain" style="width: 400px">

5. On Product Domain section, click "Add a domain". and Fill with your purchased domain.  
<img src="./assets-doc/domain-6.png" alt="Custome Domain" style="width: 400px">

6. After that you will have 3 domains.
<img src="./assets-doc/domain-7.png" alt="Custome Domain" style="width: 400px">

7. Click "Option" and choose "Go to DNS panel"
<img src="./assets-doc/domain-8.png" alt="Custome Domain" style="width: 400px">

8. On Name Servers section, you will see domain's name servers. Copy all of them. go to your domain page on Niagahoster.
<img src="./assets-doc/domain-9.png" alt="Custome Domain" style="width: 400px">

9. Click "Change nameservers".
<img src="./assets-doc/domain-10.png" alt="Custome Domain" style="width: 400px">

10. Select "Change nameservers" option. and than paste domain's name serve you have copied at netlify. And then save it.
<img src="./assets-doc/domain-11.png" alt="Custome Domain" style="width: 400px">

11. Finish, you will get this information box. Check periodcally your domain site, because it will take awaile until you can access your custome domain.
<img src="./assets-doc/domain-12.png" alt="Custome Domain" style="width: 400px">






