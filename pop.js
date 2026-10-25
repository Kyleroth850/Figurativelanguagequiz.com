var total=5
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Hot Stuff!"
compliments[1]="Nice Work!"
compliments[2]="Great Job!"
compliments[3]="AMAZING!"
compliments[4]="How Cool are You!"
compliments[5]="Fantastic!"
compliments[6]="On a Roll!"
compliments[7]="Yes Indeed!"
compliments[8]="BOOM!"
compliments[9]="You Got This!"
compliments[10]="GOOD ONE!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What literary device is an exaggeration?"
choice1[1]="Hyperbole"
choice1[2]="Alliteration"
choice1[3]="Personification"
choice1[4]="Simile"

question[2]="What literary device is used as a direct comparison?"
choice2[1]="Simile"
choice2[2]="Metaphor"
choice2[3]="Alliteration"
choice2[4]="Allusion"

question[3]="What literary device is also a reference, often biblical, historical, or literary"
choice3[1]="Alliteration"
choice3[2]="Personification"
choice3[3]="Hyperbole"
choice3[4]="Allusion"

question[4]="What literary device is used when an object or animal is given personal qualities?"
choice4[1]="Antithesis"
choice4[2]="Anaphora"
choice4[3]="Personification"
choice4[4]="Simile"

question[5]="What is this sentence an example of: Peter Piper Picked a Peck of Pickled Peppers Promptly?"
choice5[1]="Anaphora"
choice5[2]="Alliteration"
choice5[3]="Simle "
choice5[4]="Metaphor"

solution[1]="a"
solution[2]="b"
solution[3]="d"
solution[4]="c"
solution[5]="b"
