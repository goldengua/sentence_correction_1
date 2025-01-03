PennController.ResetPrefix(null); // Initiates PennController
//PennController.DebugOff()
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "consent","intro","welcome", "practice_intro", "practice 1", "practice 2", "practice 3", "practice 4","practice 5","experiment_intro", randomize("experiment") ,"exit","send", "final" )
//for testing
//Sequence( "consent","intro","welcome", "practice_intro", "practice 1", "practice 2", "send" ,"exit", "final" )

newTrial("consent",
    newHtml("consent_form", "consent.html")
        .cssContainer({"width":"720px"})
        .checkboxWarning("You must consent before continuing.")
        .print()
    ,
    newButton("continue", "Click to continue")
        .center()
        .print()
        .wait(getHtml("consent_form").test.complete()
                  
.failure(getHtml("consent_form").warn())
        )
)

newTrial("intro",
    newHtml("intro", "intro.html")
        .print()
        .log()
    ,
    newButton("continue", "Click to continue")
        .center()
        .print()
        .wait(getHtml("intro").test.complete()
.failure(getHtml("intro").warn())
        )
        ,
   getHtml("intro").log()
)

newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>We are annotating human speech data, and we need your help to find out typos or speech errors in the transcription.</p>")
    ,
    newText("<p>For each sentence, guess what is INTENDED by the speaker, and correct it accordingly. </p>")
    ,
    newText("<p>Make MINIMAL edits in the textbox to correct the sentence. </p>")
    ,
    newText("<p>You may want to delete, insert or substitute some characters in the FINAL word to make the sentence right. </p>")
    ,
    newText("<p>If the sentence looks good, or you are unsure what is the intended meaning, leave it unchanged. </p>")
    ,
    newText("<p>Indicate your confidence level with the slider below. </p>")
    ,
    newButton("Start")
        .print()
        .wait()
)


newTrial( "practice_intro" ,
    defaultText
        .print()
    ,
    newText("<p>Let's practice some sentences now. </p>")
    ,
    newButton("Continue")
        .print()
        .wait()
)

newTrial( "practice 1" ,
    defaultText
        .print()
    ,
    newText("This sentence looks wrong, and it can easily be fixed as:")
        .italic()
    ,
    newText("The hearty meal was devoured.")
        .italic()
        .bold()
    ,
    newText("Please change 'devouring' into 'devoured' in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devouring.<p>")
    ,
    newTextInput("correction", "The hearty meal was devouring.")
    .log()
    .lines(0)
    .size(400, 25)
    .print()
    ,
   
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    ,
    newButton("Continue")
        .print()
        .wait()
)
newTrial( "practice 2" ,
    defaultText
        .print()
    ,
    newText("This sentence looks good, so the corrected sentence is the same as the original:")
        .italic()
    ,
    newText("The hearty meal was devoured.")
        .italic()
        .bold()
    ,
    newText("Please leave sentence in the textbox unchanged, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devoured.")
    ,
    newTextInput("correction", "The hearty meal was devoured.")
    .log()
    .lines(0)
    .size(400, 25)
    .print()
    ,
   
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    ,
    newButton("Continue")
        .print()
        .wait()
)

newTrial( "practice 3" ,
    defaultText
        .print()
    ,
    newText("This sentence looks strange, and 'book' might be misspelled as 'hook'. ")
        .italic()
    ,
    newText("The sentence might be corrected into:")
        .italic()
    ,
    newText("Mary went to the library to borrow a book")
        .italic()
        .bold()
    ,
    newText("Please change 'hook' into 'book' in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>Mary went to the library to borrow a hook.</p>")
    ,
    newTextInput("correction", "Mary went to the library to borrow a hook.")
    .log()
    .lines(0)
    .size(400, 25)
    .print()
    ,
   
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    ,
    newButton("Continue")
        .print()
        .wait()
)

newTrial( "practice 4" ,
    defaultText
        .print()
    ,
    newText("Mary went to the library to borrow a plant.")
        .italic()
    ,
    newText("This sentence looks strange, but it is difficult to think of its intended meaning.")
        .italic()
    ,
    newText("You can try to make it less strange by changing 'plant' into a word with similar spelling (e.g. plan), or just leave it unchanged.")
        .italic()
        .bold()
    ,
    newText("Please choose to correct or not to correct 'plant', and select a low confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>Mary went to the library to borrow a plant.</p>")
    ,
    newTextInput("correction", "Mary went to the library to borrow a plant.")
    .log()
    .lines(0)
    .size(400, 25)
    .print()
    ,
   
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    ,
    newButton("Continue")
        .print()
        .wait()
)

newTrial( "practice 5" ,
    defaultText
        .print()
    ,
    newText("This sentence has a typo. ")
        .italic()
    ,
    newText("The sentence might be corrected into:")
        .italic()
    ,
    newText("Mary went to the library to borrow a book.")
        .italic()
        .bold()
    ,
    newText("Please change 'books' into 'book' in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>Mary went to the library to borrow a books. </p>")
    ,
    newTextInput("correction", "Mary went to the library to borrow a books.")
    .log()
    .lines(0)
    .size(400, 25)
    .print()
    ,
   
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    ,
    newButton("Continue")
        .print()
        .wait()
)

Template( variable =>
    newTrial( "experiment",
    defaultText
        .print()
    ,
    newText("context",variable.context)
    ,
    newText("stimulus","<b>"+variable.stimulus+"</b>")
    ,
    newText('<br>')
    ,
    newTextInput("correction", variable.stimulus)
        .log()
        .lines(0)
        .size(Math.max(500, variable.stimulus.length * 10), 40) // Adjust size based on text length
        .print()
    ,
    newScale("score", 100)
    .slider()
    .before( newText("score label", "Confidence: ") )
    .after( newText("score text", " / 100") )
    .print()
    .wait()
    .log()
    ,
    newButton("Continue")
        .print()
        .wait()
    
)
.log('item',variable.item)
.log('uttrID',variable.uttrID)
.log('context',variable.context)
.log('error',variable.error)
.log('pos',variable.error_uPOS)
.log('sentence',variable.stimulus)
.log('group',variable.group)
.log('condition',variable.condition)
)

newTrial("exit",
    newHtml("exit", "exit.html")
        .print()
        .log()
    ,
    newButton("continue", "Click to continue")
        .center()
        .print()
        .wait(getHtml("exit").test.complete()
                  
.failure(getHtml("exit").warn())
        )
    ,
   getHtml("exit").log("prolific_id")
)

SendResults( "send" )

newTrial( "final" ,
    newText("<p>Thank you for your participation! Your results have been successfully sent to the server. </p>")
        .print(),
    newButton("void")
        .wait()
    
)
