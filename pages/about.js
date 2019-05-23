import Link from 'next/link';

const About = () => (
<div>
  <ul>
    <li><Link href="/index"><a>Home</a></Link></li>
    <li><Link href="/about"><a>About</a></Link></li>
  </ul>
  <h1>
      About Next js about us page
  </h1>
  <img src="/static/aj.png" alt="My image" height="200" width="200" />
  <p><img src="/static/a.jpg" alt="My image" height="200" width="200" /></p>
  <img src="/static/xyz.jpg" alt="My image" height="200" width="200" />
</div>
);

export default About;
