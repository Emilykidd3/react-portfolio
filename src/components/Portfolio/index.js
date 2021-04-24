import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Project from '../Project'

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
      <Project />
    </section>
  );
}
export default Gallery;