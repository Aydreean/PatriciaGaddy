import React from 'react'

import ConsultationForm from '../ConsultationForm';
import FooterMap from '../FooterMap';
import Footer from '../Footer';


const MarriageDissolutionPage = () => {
    return (
        <div>
            <div className="container-fluid subpage">
                <div className="row">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container-fluid">
                            <h1 class="display-4">Marriage Dissolution</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod porttitor congue. Suspendisse tincidunt elit vel mi lacinia molestie. Pellentesque commodo commodo elit, ut tincidunt quam maximus quis. Maecenas sed lorem congue arcu ullamcorper rutrum id id nisl. Maecenas finibus scelerisque libero, ut euismod urna molestie eget. Nullam semper facilisis nunc a viverra. Sed eget magna eu lacus imperdiet volutpat. Phasellus consequat velit dictum mollis posuere. Etiam magna urna, laoreet id libero vestibulum, vulputate semper urna. Vestibulum vel malesuada augue. Nullam non laoreet purus. </p>
                          
                            <p>Maecenas a bibendum elit, vel ultrices velit. Integer ante massa, maximus eu pulvinar nec, congue pretium enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisi, commodo eu libero vel, maximus gravida orci. Nulla et interdum neque. Integer sit amet sodales magna. Sed eget magna ex. Fusce a iaculis lorem. Curabitur ac libero eu metus eleifend sagittis. </p>
                    </div>
                </div>
            </div>
            <ConsultationForm></ConsultationForm>
            <FooterMap></FooterMap>
            <Footer></Footer>
        </div>
    )
}

export default MarriageDissolutionPage
