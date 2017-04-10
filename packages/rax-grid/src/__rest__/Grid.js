import renderer from 'rax-test-renderer';
import {createElement} from 'rax';
import {Text} from 'rax-components';
import Col from '../Col';
import Row from '../Row';

describe('Grid', () => {

  it('should render a col', () => {
    const component = renderer.create(
      <Col><Text>hello</Text></Col>
    );
    let tree = component.toJSON();
    expect(tree.tagName).toEqual('SPAN');
  });

  it('should render a col with text', () => {
    const component = renderer.create(
      <Col>hello</Col>
    );
    let tree = component.toJSON();
    expect(tree.tagName).toEqual('DIV');
  });

  it('should render a col with 2 children', () => {
    const component = renderer.create(
      <Col><Text>hello</Text><Text>hello</Text></Col>
    );
    let tree = component.toJSON();
    expect(tree.tagName).toEqual('DIV');
  });

  it('style in col', () => {
    const component = renderer.create(
      <Col><Text>hello</Text></Col>
    );
    let tree = component.toJSON();
    expect(tree.style.flex).toEqual(1);
    expect(tree.style.flexDirection).toEqual('column');
  });

  it('should render a row', () => {
    const component = renderer.create(
      <Row><Col><Text>hello</Text></Col></Row>
    );
    let tree = component.toJSON();
    expect(tree.tagName).toEqual('DIV');
    expect(tree.children[0].tagName).toEqual('SPAN');
  });

  it('should render a row width 2 col', () => {
    const component = renderer.create(
      <Row><Col><Text>hello</Text></Col><Col><Text>hello</Text></Col></Row>
    );
    let tree = component.toJSON();
    expect(tree.tagName).toEqual('DIV');
    expect(tree.children[0].tagName).toEqual('SPAN');
  });

  it('style in row', () => {
    const component = renderer.create(
      <Row><Col><Text>hello</Text></Col></Row>
    );
    let tree = component.toJSON();
    expect(tree.style.flexDirection).toEqual('row');
  });

});