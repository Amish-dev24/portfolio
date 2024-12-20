import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  experiences = [
    {
      id: 1,
      year: '10/2024 - Present',
      title: 'Senior Angular Developer . Villaex Technologies ',
      description:
        'Developed efficient and maintainable web applications using Angular, HTML, and CSS. Implemented template-driven and reactive forms for seamless data input, validation, and user interaction. Managed robust data handling with shared modules and services for consistent functionality and code reuse. Utilized Angular routing capabilities to manage application navigation and optimized the codebase by modularizing components with services and shared modules, ensuring reusability and maintainability',
      tech: ['Angular', 'TypeScript', 'Html', 'Css'],
      companyLink: 'https://villaextechnologies.com/',
    },
    {
      id: 2,
      year: '08/2021 - 10/2024',
      title: 'Senior Frontend Developer . Hailu Tech ',
      description:
        'Developed efficient and maintainable web applications using Angular, HTML, and CSS. Implemented template-driven and reactive forms for seamless data input, validation, and user interaction. Managed robust data handling with shared modules and services for consistent functionality and code reuse. Utilized Angular routing capabilities to manage application navigation and optimized the codebase by modularizing components with services and shared modules, ensuring reusability and maintainability',
      tech: ['Angular', 'TypeScript', 'Html', 'Css'],
      companyLink: '#',
    },
    {
      id: 3,
      year: '08/2019 - 08/2021,  ',
      title: 'UI Developer · Brainplow ',
      description:
        'Developed over 8 web application pages using HTML5, CSS3, and SCSS. Designed responsive web applications with CSS and Bootstrap. Improved application performance by resolving issues and optimizing functionality. Enhanced user experience, achieving a 100% increase in form completion rates. Experienced in managing Angular websites and proficient in version control using Git.',
      tech: ['Bootstrap', 'SCSS', ' HTML5', ' CSS3 '],
      companyLink: '#',
    },
  ];
  /*For Projects*/
  projects = [
    {
      title: 'Accountect',
      description:
        'Developed Accountect, a cloud-based accounting platform, to enable real-time collaboration and automated financial management. It offers features like invoicing, billing, and inventory tracking to streamline business processes.',
      image: 'assets/accountect.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'SellnRoar (Sell for bid)',
      description:
        'SELLnROAR is the Auction Universe. Fast, Easy, Cool. SELLnROAR brings the Online Auction Experience to you on it’s marketplace like NEVER BEFORE! With its proprietary Machine Learning (ML) engine, SELLnROAR provides a next generation Artificially Intelligent Marketplace to connect Sellers with Buyers.',
      image: 'assets/sellnrozr.png',
      link: 'https://www.sellnroar.com/',
    },
    {
      title: 'Shezlong',
      description:
        'I designed the entire Shezlong website, focusing on creating a user-friendly interface for an online mental health platform. My design ensures easy navigation and accessibility, providing a confidential and welcoming environment for users to connect with professional therapists via video calls. ',
      image: 'assets/shehzlog.jpg',
      link: 'https://www.shezlong.com/',
    },
    {
      title: 'BuyNRoar (ShopnRoar)',
      description:
        'BUYnROAR is a next generation artificially intelligent comparative Online Shopping Engine where consumers can search for and compare millions of Products for the ultimate comparative shopping experience.  ',
      image: 'assets/bnr.png',
      link: 'https://buynroar.com/',
    },
    /*{
      title: 'Chrysalys',
      description:
        'CHRYSALYS supports you in developing your skills, talents and potential. We help you reveal yourself, to bring out your deep identity to be the person you want to show the world personally and professionally.',
      image: 'assets/chrysalys.png',
      link: 'https://chrysalys.art/',
    },*/
  ];
}
