PennController.ResetPrefix(null); // Initiates PennController
//PennController.DebugOff()
// Start typing your code here
 // Initiates PennController

// Start typing your code here

Sequence( "consent","intro","welcome", "practice_intro", "practice 1", "practice 2", "practice 3", "practice 4","practice 5","experiment_intro", randomize("experiment"), "send" ,"exit", "final" )
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
    newText("<p>We are annotating human speech data, and we need your help to find out speech errors in the transcription.</p>")
    ,
    newText("<p>For each sentence, decide whether the sentence need to be modified.</p>")
    ,
    newText("<p>Make MINIMAL edits needed and type the ENTIRE sentence in the input box. </p>")
    ,
    newText("<p>You may want to change the position of two words, delete some characters, or use a different word to make the sentence right. </p>")
    ,
    newText("<p>If the sentence looks good, re-type the original sentence in the input box. </p>")
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
    newText("This sentence contains a speech error.")
        .italic()
    ,
    newText("The corrected sentence is: ")
        .italic()
    ,
    newText("The hearty meal was devoured by the boy.")
        .italic()
        .bold()
    ,
    newText("Please type the corrected sentence in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devouring by the boy.<p>")
    ,
    newTextInput("correction", "")
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
    newText("Please type the corrected/original sentence in the textbox, and select a high confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The hearty meal was devoured by the boy.")
    ,
    newTextInput("correction", "")
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
    newText("This sentence might have a speech error because customer does not often serve waitress. ")
        .italic()
    ,
    newText("The sentence might be corrected into:")
        .italic()
    ,
    newText("The waitress served the customer.")
        .italic()
        .bold()
    ,
    newText("Please type the corrected sentence in the textbox, and select a lower confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The customer served the waitress.</p>")
    ,
    newTextInput("correction", "")
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
    newText("This sentence has a speech error, because waitress does not often serve custom. ")
        .italic()
    ,
    newText("The sentence might be corrected into:")
        .italic()
    ,
    newText("The waitress served the customer.")
        .italic()
        .bold()
    ,
    newText("Please type the corrected sentence in the textbox, and select a moderate confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The waitress served the custom.</p>")
    ,
    newTextInput("correction", "")
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
    newText("This sentence has a speech error. ")
        .italic()
    ,
    newText("The sentence might be corrected into:")
        .italic()
    ,
    newText("The waitress served the customer.")
        .italic()
        .bold()
    ,
    newText("Please type the corrected sentence in the textbox, and select a moderate confidence level.")
        .italic()
    ,
    newText("<p>   </p>")
    ,
    newText("<p>The waitress served the custom, hmm, customer. </p>")
    ,
    newTextInput("correction", "")
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
    newTextInput("correction", "")
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
SendResults( "send" )


newTrial("exit",
    newHtml("exit", "exit.html")
        .print()
    ,
    newButton("continue", "Click to continue")
        .center()
        .print()
        .wait(getHtml("exit").test.complete()
                  
.failure(getHtml("exit").warn())
        )
)
newTrial( "final" ,
    newText("<p>Thank you for your participation!</p>")
        .print()
    ,
    newText("<p><a href='https://www.pcibex.net/' href='_blank'>Click here to validate your participation.</a></p>")
        .print()
    ,
    newButton("void")
        .wait()
)
