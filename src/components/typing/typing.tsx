import React, { useState, useEffect } from 'react';

import './typing.scss';

interface Props {
  start: boolean;
}

let index = 0;
let isDeleting = false;

const Typing: React.FC<Props> = ({ start }: Props): JSX.Element => {
  const [texts, setTexts] = useState<string[]>([
    'Full Stack Web Developer',
    '3rd year College Student',
    'Basketball Referee',
  ]);
  const [currentText, setCurrentText] = useState<string>('');
  const [looping, setLooping] = useState<boolean>(false);
  let timeout: any = null;
  const wait = 1500;

  const getFullText = () => texts[index % texts.length];

  const typeEffect = () => {
    const fullTxt = getFullText();

    if (isDeleting) {
      setCurrentText(fullTxt.substring(0, currentText.length - 1));
    } else {
      setCurrentText(fullTxt.substring(0, currentText.length + 1));
    }
  };

  useEffect(() => {
    if (texts.length > 0) {
      setTimeout(() => {
        setLooping(true);
        typeEffect();
      }, 1000);
    }
    return () => {
      clearTimeout(timeout);
      setCurrentText('');
      index = 0;
    };
  }, []);

  useEffect(() => {
    if (start && looping) {
      const fullTxt = getFullText();
      let typeSpeed = 300;

      if (isDeleting) typeSpeed /= 4;

      if (!isDeleting && currentText === fullTxt) {
        isDeleting = true;
        typeSpeed = wait;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        index++;
      }

      timeout = setTimeout(() => typeEffect(), typeSpeed);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [currentText]);

  return (
    <section className="typing">
      I&apos;m a <span>{currentText}</span>
    </section>
  );
};

export default React.memo(Typing);
