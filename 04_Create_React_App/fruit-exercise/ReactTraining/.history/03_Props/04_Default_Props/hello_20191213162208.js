class Hello extends React.Component {
  static defaultProps = {
    from:'Anonymous'
    bangs: '4'
  }
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
  }
}




