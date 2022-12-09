import { Component } from "react";

export default class Airplane extends Component<{flanelinha: boolean}> {
    constructor(props: any) {
        super(props);

        console.log("PREPARANDO O AEROPORTO");
    }

    // Mounting
    UNSAFE_componentWillMount() {
        console.log("PREPARANDO A PISTA")
    }

    // RENDER

    componentDidMount() {
        console.log("AEROPORTO PRONTO E PISTA PRONTA")
    }

    // Updating
    UNSAFE_componentWillReceiveProps() {
        console.log("FLENELINHA MUDOU DE DECISÃO!!")
    }

    // Unmount
    componentWillUnmount() {
        console.log("AVIÃO VOLTOU PRO HANGAR ");
    }

    render(){0

        console.log("RENDER");
        
        return(
            <div>
                CHAMOU O COMPONENTE AIRPLANE
                {this.props.flanelinha ? "FLANELINHA VERDADE" : "FLENELINHA FALSO"}
            </div>
        );
    }
}