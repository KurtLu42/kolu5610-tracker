# kolu5610-tracker

Title: Sprts Recording Web

<br>

Introduction: <br>
This is a web application that allows users to record their exercise activities, including the type of exercise, location, purpose, and personal evaluation. Users can categorize their exercise activities based on their goals and develop their own exercise habits.

<br>

How to use:<br>
1. Enter the name and location of your exercise, provide a self-evaluation of the exercise, and select the exercise goal that matches your exercise from the options provided on the webpage.
2. Click the "Add" button.
3. You can view your exercise history in "All Recording".
4. Clicking the "Detail" button allows you to view the detailed information of the recorded exercise.
5. If you want to clear the records of all exercises, you can click the "Clear All Recording" button to clear the history.

<br>

Code Example:<br>
The following code is about users selecting their own sports purpose.<br>
HTML:<br>

            <div class="enterSelect">
                <input type="text" id="sportsName" placeholder="Sports Name">

                <select id="sportPurpose" placeholder="Sports Purpose">
                    <option id="selection1">Sports Purpose</option> 
                    <option valus="option1">Improving cardiovascular function</option>
                    <option valus="option2">Improving endurance</option>
                    <option valus="option3">Improving body posture</option>
                    <option valus="option4">Enhancing muscle coordination</option>
                    <option valus="option5">Enhancing reaction ability</option>
                    <option valus="option6">Relieving stress</option>
                </select>
                <br>
                <br>
                <br>
                <input type="text" id="location" placeholder="Sports Location">
            </div>

CSS:<br>

            #sportPurpose{
                text-align: flex-start;
                float: right;
                width: 700px;
                height: 65px;
                font-size: 15pt;
                border-radius: 5px;
                }

                select{
                padding: 10px;
                width: 200px;
                margin-bottom: 10px;
                }

                #selection1{
                color: gray;
                } 

<br>

