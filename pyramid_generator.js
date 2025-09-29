function pyramid(repeat_chr, row_number, boo){
  let str_result=""
  if(!boo){
    for (let i=0 ;i<row_number; i++){
      let line='\n'+' '.repeat(row_number-1-i)+repeat_chr.repeat(2*i+1);
      str_result+=line
    }
  }else{

    for (let i=row_number-1 ;i>=0; i--){
      let line='\n'+' '.repeat(row_number-1-i)+repeat_chr.repeat(2*i+1);
      str_result+=line;
    }

  }

  return str_result+'\n'
}
