import React from "react";
import "../css/serviceStyle.css";

const Services = () => {
  return (
    <>
   <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">our Awesome Services</h1>
                <p className="heading p__color">
                When you need to make a decision about choosing a dentist,
                </p>
                <p className="heading p__color">
                 you have to weigh all the important factors,
                 and in the end remember that your health is the most important thing.
                </p>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Orthodontic installation</h1>
                                <p className="p service__text p__color">
                                The installation of braces refers to the process of attaching orthodontic or dental braces to the teeth through molding
                                </p>
                                <p className="p service__text p__color">
                                fitting, and threading of metal wires and elastic bands. Depending on the condition of the teeth and jaw, more procedures such as surgery, may have to be performed to achieve the desired results
                                </p>
                                <p className="p service__text p__color">
                                 
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dental" width="50" 
                            height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                               <path stroke="none" d="M0 0h24v24H0z"
                                fill="none"/> <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 -.001 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 .004 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 1.994 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -4.994 -4 -5c-1.423 -.004 -2.92 .911 -4 1.5z" /> 
                               <path d="M12 5.5l3 1.5" /> </svg>     </div>
                            <div className="service__meta">
                                <h1 className="service__text">Dental implants</h1>
                                <p className="p service__text p__color">
                                Dental implants are replacement tooth roots. Implants provide a strong foundation for fixed (permanent) or removable replacement teeth that are made to match your natural teeth
                                </p>
                                <p className="p service__text p__color">
                                There are many advantages to dental implants, including:
                                </p>
                                <p className="p service__text p__color">
                                Improved appearance,Improved comfort...
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" 
                            fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd"
                             d="M24 36L27.9705 8.65846C28.0261 8.32969 28.0029 7.99388 27.9024 7.67403C27.802 7.35418 27.6266 7.05786 27.3884 6.80537C27.1502 6.55287 26.8548 6.35018 26.5223 6.21117C26.1899 6.07216 25.8284 6.00013 25.4625 6H8.53922C8.17317 5.99991 7.81143 6.07178 7.47881 6.21069C7.14618 6.3496 6.85054 6.55226 6.61215 6.80478C6.37376 7.0573 6.19826 7.3537 6.09769 7.67366C5.99712 7.99362 5.97386 8.32956 6.0295 8.65846L10 36V38.5C10 39.4154 10.3487 40.3011 10.9816 40.9603C11.6157 41.6209 12.4848 42 13.4 42H20.6C21.5152 42 22.3843 41.6209 23.0184 40.9603C23.6513 40.3011 24 39.4154 24 38.5V36ZM18.0917 15.3115C18.0917 14.7592 17.644 14.3115 17.0917 14.3115C16.5394 14.3115 16.0917 14.7592 16.0917 15.3115V18.8447H12.4761C11.9238 18.8447 11.4761 19.2924 11.4761 19.8447C11.4761 20.397 11.9238 20.8447 12.4761 20.8447H16.0917V24.3782C16.0917 24.9305 16.5394 25.3782 17.0917 25.3782C17.644 25.3782 18.0917 24.9305 18.0917 24.3782V20.8447H21.7069C22.2592 20.8447 22.7069 20.397 22.7069 19.8447C22.7069 19.2924 22.2592 18.8447 21.7069 18.8447H18.0917V15.3115ZM21.5757 39.5752C21.843 39.2968 22 38.9107 22 38.5V37H12V38.5C12 38.9107 12.157 39.2968 12.4243 39.5752C12.6903 39.8523 13.0422 40 13.4 40H20.6C20.9578 40 21.3097 39.8523 21.5757 39.5752Z"
                              fill="#333333"/> <path d="M42 7C42 6.44772 41.5523 6 41 6C40.4477 6 40 6.44772 40 7H34V9H40V11H34V13H40V15H34V17H40V18.9919L36.2428 23.3468C36.0862 23.5283 36 23.7602 36 24V41C36 41.5523 36.4477 42 37 42C37.5523 42 38 41.5523 38 41V24.3718L41.7572 20.0169C41.9138 19.8353 42 19.6035 42 19.3636V7Z" fill="#333333"/> </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">treatment of gum disease</h1>
                                <p className="p service__text p__color">
                                Common treatments include scaling (scraping off tartar) and root planing (smoothing out the roots of teeth with an ultrasonic device) to get rid of hardened plaque, which is also called tartar.
                                </p>
                                <p className="p service__text p__color">
                                Topical antibiotics can include antibiotic mouth rinses or insertion of gels containing antibiotics in the space between your teeth and gums or into pockets after deep cleaning
                                </p>
                                <p className="p service__text p__color">
                                  
                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Extractions</h1>
                                <p className="p service__text p__color">
                                This extraction or avulsion dentistry is an intervention that consists in extracting one of his dental implants. Souvent redoutée, elle est la plupart du temps moins douloureuse qu'il n'y parait grace aux techniques de pointe utilisées et aux recommandations de votre chirurgien-dentiste.
                                </p>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Preparation of dental fillings</h1>
                                <p className="p service__text p__color">
                                The dentist will use several different instruments to first create the opening, and then remove the decayed material. Once complete, the cavity must be rinsed and cleaned of any remaining debris in preparation for the filling
                                </p>
                               
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dental" width="50" 
                            height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                               <path stroke="none" d="M0 0h24v24H0z"
                                fill="none"/> <path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 -.001 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 .004 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 1.994 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -4.994 -4 -5c-1.423 -.004 -2.92 .911 -4 1.5z" /> 
                               <path d="M12 5.5l3 1.5" /> </svg>  
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Root canal treatment</h1>
                                <p className="p service__text p__color">
                                Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth. 
                                Root canal treatment is not painful and can save a tooth that might otherwise have to be removed completely.
                                </p>
                                <p className="p service__text p__color">
                                Root canal treatment is usually successful at saving the tooth and clearing the infection.
                                </p>
                                
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
};
export default Services;
