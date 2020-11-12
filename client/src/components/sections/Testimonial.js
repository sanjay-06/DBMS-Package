import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Meet our Alumni'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  "Mylswamy Annadurai  (born 2 July 1958, in Kodhawady
near Pollachi in Coimbatore district, Tamilnadu, India) is a scientist with the Indian Space Research
Organization and currently serves as Programme Director IRS&SSS (Indian Remote Sensing & Small,
Science and Student Satellites) and Project Director of Chandrayaan-1 and Chandrayaan-2. Annadurai
writes a regular column, "Kaiyaruke Nila"." 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"></span>
                  <span className="text-color-low"> Mylswamy Annadurai / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Coimbatore</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Shiv Nadar (born 14 July 1945) is an Indian industrialist and philanthropist. He is the founder and
chairman of HCL and the Shiv Nadar Foundation. As of 2011, his personal wealth is US$ 5.6 billion.
Shiv Nadar founded HCL in the mid-1970s and transformed the IT hardware company into an IT
Enterprise over the next three decades by constantly reinventing his company's focus
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Shiv Nadar</span>
                  <span className="text-color-low">  / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Thoothukudi</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Sundaram Karivardhan or short Kari (June 20, 1954 Coimbatore, India–August 24, 1995 in the same
town) was a legendary figure of Indian motorsports. Apart from being a successful formula car racer,
was also a designer and constructor of several formula cars, his most famous design being
the Formula Maruti open wheeled race car. 
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sundaram Karivardhan</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Coimbatore</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;