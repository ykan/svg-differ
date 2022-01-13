import React from 'react';
import ReactDOM from 'react-dom';

import styled from '@emotion/styled';

// 设置图片组件样式
const StyledH1 = styled.h1`
  color: red;
`

function main() {
  ReactDOM.render(<StyledH1>Hello world.</StyledH1>, document.getElementById('10-recommend'))
}

main()
