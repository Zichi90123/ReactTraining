class Hello extends React.Component {
  static defaultProps = {
    from:'Anonymous'
  }
  render() {
    let bangs = "!".repeat(this.props.bangs);
    return <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
  }
}




