import styled from 'styled-components';

export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
});

export const AddTimerButton = styled.button({
  width: 'fit-content',
  margin: '0 auto',
  marginBottom: 20,
});

export const TimersWrapper = styled.div({
  margin: '0 auto',
  display: 'flex',
  gap: 20,
  flexDirection: 'column',
});
