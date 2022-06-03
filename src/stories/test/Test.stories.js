import React, {useState} from "react"
import { storiesOf } from "@storybook/react"
import '../../styles/global.scss'

import {Checkbox, Option, Datetimepicker} from "../../components/inputs"


const stories = storiesOf('Demo 2', module)

stories.add('Test', () => { 
    
    const [testDate, setTestDate] = useState(new Date());

    const handleChangeTestDate = (e) => {
        console.log(e)
    }

    return (
        <div style={{ backgroundColor: '#eee' }}>            
            <Checkbox size="lg" name="bikedis" label="I have a bike disable" value="bikedis" disabled/>  
            <Checkbox size="sm" name="bikesm" label="I have a bike sm" value="bikesm"/>  
            <Checkbox size="md" name="bikemd" label="I have a bike md" value="bikemd"/>  
            <Checkbox size="lg" name="testlg" label="test lg" value="testlg1"/>            

            <Option size="lg" name="test" label="HTML" value="HTML" disabled />
            <Option size="sm" name="test" label="CSS" value="CSS" />
            <Option size="md" name="test" label="Javascript" value="Javascript" />
            <Option size="lg" name="test" label="CSS 3" value="CSS 3" />
                       
            <div style={{width:"50%"}}>
            <Datetimepicker name="testpicker" onChange={handleChangeTestDate}/>          
            </div>
            
      
        </div>
    )
})