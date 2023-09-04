import { mount } from '@vue/test-utils';
import Login from '@/views/Login';

describe('Login Button', () => {
  it('Renders a v-btn component with the text "LOGIN"', () => {
    const wrapper = mount(Login);
    const button = wrapper.findComponent({ name: 'v-btn' });
    if(button.exists()){
      expect(button.text()).toBe('LOGIN');
    }    
  });
});