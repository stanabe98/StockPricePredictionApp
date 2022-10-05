import { filter } from "d3-array";
import React from "react";
import { Text, Pressable} from 'react-native';


const FilterComponent = (props) =>{

    const { filterDay, filterText, selectedRange, setSelectedRange } =props;
    const isFilterSelected= (filter) => filter === selectedRange;
    return (
        <Pressable style={{paddingHorizontal:10, paddingVertical:3,
         backgroundColor:  isFilterSelected(filterDay) ? 'darkslategrey': 'transparent',
         }}
            onPress={()=> setSelectedRange(filterDay)}
         > 
        <Text style={{color:'white'}}> {filterText}</Text>
        </Pressable>
    )
}



export default FilterComponent;