PennController.ResetPrefix(null); // Initiates PennController
//PennController.DebugOff()
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "consent","intro","welcome", "practice_intro", "practice 1", "practice 2", "practice 3", "practice 4","practice 5","experiment_intro", randomize("experiment"), "send" ,"exit", "final" )
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
)

newTrial( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p>Welcome!</p>")
    ,
    newText("<p>We are annotating language data, and we need your help to find out typos or speech errors in the transcription.</p>")
    ,
    newText("<p>For each sentence, decide whether the sentence need to be modified.</p>")
    ,
    newText("<p>Make MINIMAL edits in the textbox to correct the sentence. </p>")
    ,
    newText("<p>You may want to delete, insert or substitute some characters in the word to make the sentence right. </p>")
    ,
    newText("<p>If the sentence looks good, leave it unchanged. </p>")
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
    newText("<p>Now let us practice on some sentences. </p>")
    ,
    newButton("Continue")
        .print()
        .wait()
)

newTrial( "practice 1" ,
    defaultText
        .print()
    ,
    newText("This sentence contains an error.")
        .italic()
    ,
    newText("The corrected sentence is: ")
        .italic()
    ,
    newText("The hearty meal was devoured by the boy.")
        .italic()
        .bold()
    ,
    newText("Please change 'devouring' into 'devoured' in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devouring by the boy.<p>")
    ,
    newTextInput("correction", "The hearty meal was devouring by the boy.")
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
    newText("This sentence is correct.")
        .italic()
    ,
    newText("The corrected sentence is the same as the original: ")
        .italic()
    ,
    newText("The hearty meal was devoured by the boy.")
        .italic()
        .bold()
    ,
    newText("Please leave sentence in the textbox unchanged, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devoured by the boy.")
    ,
    newTextInput("correction", "The hearty meal was devoured by the boy.")
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
    newText("In this sentence, 'book' might be misspelled as 'hook'. ")
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
    newText("This sentence does not look right, but it is difficult to think of its intended meaning.")
        .italic()
    ,
    newText("You might want to correct 'plant' to 'book', or leave it unchanged.")
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
    newText("sentence",variable.sentence)
    ,
    newTextInput("correction", variable.sentence)
    .log()
    .lines(0)
    .size(450, 25)
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
.log('sentence',variable.sentence)
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
)


SendResults( "send" )

newTrial( "final" ,
    newText("<p>Thank you for your participation! Your results have been successfully sent to the server. </p>")
        .print(),
    newButton("void")
        .wait()
    
)
