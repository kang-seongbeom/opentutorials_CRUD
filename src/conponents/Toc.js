import { Component } from 'react';

class TOC extends Component {

    
    //true이면 render함수 호출
    //false이면 render함수 호출 안함
    //newPrps와 newState는 고정 파라미터
    //만약 props의 데이터가 바뀌면 newProps의 값이 바뀌게 된다.
    //따라서, this.props.data와 newProps.data를 비교하면 해당 값이 바뀌었는지 확인 가능
    //만약 값이 바뀌었을 때만 랜더링이 필요하다면
    //이 비교를 통해 랜더링함수(render)를 호출 할 것인지 판단 할 수 있다.
    //push를 사용해서 배열에 원소를 추가한다면, 이전과 이후 값이 이후 값으로 동일하지만,(원본이 변한다. push는 call by reference)
    //concat을 사용하여 배열에 원소를 추가하면, 이전과 이후 값이 서로 다르다.(원본이 불변한다(immutable). concat은 call by value)
    shouldComponentUpdate(newProps, newState){
        console.log("비교",newProps.data, this.props.data);

        //값이 바뀌지 않았으므로 랜더링 불필요(첫 화면은 이를 무시하고 랜더링 하는거 같음)
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }

    render() {
        console.log("Toc render()");
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i<data.length){
            lists.push(
                <li key= {data[i].id}>
                    <a href = { "/content/" +  data[i].id }
                        data-id = { data[i].id }
                        onClick = { (e) => { 
                            this.props.onChangePage(e.target.dataset.id); 
                            e.preventDefault(); 
                            
                        } } >{ data[i].title }
                    </a>
                </li>
            );
            i++;
        }
        return (
            <nav>
                <ul>
                    { lists }
                </ul>
            </nav>
        );
    }
}

export default TOC;