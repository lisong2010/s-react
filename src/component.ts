export default class Component {
  props: object;

  context: any;

  state: object;

  constructor(props, context) {
    this.props = props;
    this.context = context;
    this.state = this.state || {};
  }

  render() {}

  setState() {}

  forceUpdate() {}
}
