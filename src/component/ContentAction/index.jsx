import './ContentAction.scss';

const Button = (props) => {
    console.log(props.cursor)
    return (
        <button className= {props.className || ''} style={{
            color: props.color,
            backgroundColor: props.backgroundColor,
            borderRadius: props.borderRadius,
            cursor: 'pointer',
            padding: props.padding,
            fontSize: props.textSize,
            margin: props.margin,
            border: props.border,
            cursor: props.cursor || 'pointer'
        }}>
            {props.icon || ''} {props.title}
        </button>
    )
}

export default function ContentAction(){
    return (
        <div className="content-action">
            <div className="row">
                <Button 
                    className="hov"
                    color = '#fff'
                    backgroundColor = '#29d2bf'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '#29d2bf'
                    title = 'Submit'
                />
                <Button 
                    className="hov"
                    color = '#fff'
                    backgroundColor = '#29d2bf'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '#29d2bf'
                    title = 'Re-do'
                />
                <Button 
                    color = '#3eb2e3'
                    backgroundColor = '#fff'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '1px solid #3eb2e3'
                    title = 'Dict Mode'
                    icon = {<i className="fa-solid fa-file"></i>}
                />
            </div>

            <div className="row">
                <Button 
                    color = 'rgb(255, 102, 102)'
                    backgroundColor = '#fff'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '1px solid rgb(255, 102, 102)'
                    title = 'x 5'
                    icon = {<i class="fa-solid fa-ticket"></i>}
                />
                <div className="content-action__input-group">
                    <input placeholder="Question Cont"/>
                    <Button 
                    className="hov"
                    color = '#fff'
                    backgroundColor = '#29d2bf'
                    borderRadius = '0px 4px 4px 0'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '1px solid #29d2bf'
                    title = 'Search'
                />
                </div>
                <Button 
                    color = 'rgba(0,0,0,.25)'
                    backgroundColor = '#f5f5f5'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '1px solid #d9d9d9'
                    title = 'Previous'
                    cursor = 'not-allowed'
                />
                <Button 
                    className="hov"
                    color = '#fff'
                    backgroundColor = '#29d2bf'
                    borderRadius = '4px'
                    padding = '5px 15px'
                    fontSize = '14px'
                    margin = '0 15px 0 0'
                    border = '#29d2bf'
                    title = 'Next'
                />
            </div>
            
        </div>
    )
}