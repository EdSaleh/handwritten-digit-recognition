import { Icon, Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const { Footer } = Layout;

const IconFooter = styled(Icon)`
  margin-right: 3px;
  font-size: 15px;
`;

const PFooter = styled.p`
  font-size: 8px;
  text-align: center;
`;

const AFooter = styled.a`
  color: inherit;
`;

const MnistFooter = () => (
  <Footer>
    <PFooter>
      <AFooter
        href="https://github.com/EdSaleh/handwritten-digit-recognition"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconFooter type="github" />
      </AFooter>
    </PFooter>
  </Footer>
);

export default MnistFooter;
