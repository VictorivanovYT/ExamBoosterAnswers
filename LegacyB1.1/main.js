let n1="",n2="",n3="",n4="",n5="",n6=""
let n7="",n8="",n9="",n10="",n11="",n12=""
let n13="",n14="",n15="",n16="",n17="",n18=""
let n19="",n20="",n21="",n22="",n23="",n24="",n25=""
let type=""

function b1level(){
    const page = document.getElementById('page').value
    const exercise = document.getElementById('exercise').value
    var ans = document.getElementById('answerer')
    ans.innerHTML = ""
    switch (page){
        case "104":
            n1 = "B"
            n2 = "C"
            n3 = "B"
            n4 = "B"
            ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
            break
        case "105":
            switch (exercise){
                case '3':
                    n1 = "They can kill you if you eat them."
                    n2 = "Soak a cloth in cold water and put it on the affected area."
                    n3 = "It grows through walls and pavements and it's almost impossible to kill."
                    n4 = "They contain more vitamins."
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
                case '4':
                    n1 = "suffer"
                    n2 = "last"
                    n3 = "Soak"
                    n4 = "avoid"
                    n5 = "treat"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}`
                    break
                case '6':
                    n1 = "poisoning"
                    n2 = "reaction"
                    n3 = "behave"
                    n4 = "severe"
                    n5 = "plant"
                    n6 = "natural"
                    n7 = "wild"
                    n8 = "affected"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
                    break
            }
            break
        case "106":
            switch (exercise){
                case '1':
                    n1 = "cheese, butter"
                    n2 = "baking powder, sugar"
                    n3 = "cakes, bread, biscuits"
                    n4 = "tuna, soup"
                    n5 = "macaroni, brown rice"
                    n6 = "pork, chicken"
                    n7 = "fish fingers, ready meals"
                    n8 = "apples, potatoes"
                    n9 = "crab, lobster"
                    n10 = "crisps, biscuits"
                    n11 = "orange juice, lemonade"
                    n12 = "toffee, chocolate"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}, 9.${n9}, 10.${n10}, 11.${n11}, 12.${n12}`
                    break
                case '2':
                    n1 = "strong"
                    n2 = "Salty"
                    n3 = "juicy"
                    n4 = "sweet"
                    n5 = "creamy"
                    n6 = "spicy"
                    n7 = "sour"
                    n8 = "bitter"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
                    break
                case '3':
                    n1 = "teaspoon"
                    n2 = "bar"
                    n3 = "kilos"
                    n4 = "tablespoon"
                    n5 = "tin"
                    n6 = "pinch"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}`
                    break
                case '4':
                    n1 = "boiled"
                    n2 = "scrambled"
                    n3 = "mashed"
                    n4 = "baked"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
                case '6':
                    n1 = "starters"
                    n2 = "main courses"
                    n3 = "desserts"
                    n4 = "beverages"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
            }
            break
        case "107":
            switch(exercise){
                case '8':
                    n1 = "different"
                    n2 = "impressive"
                    n3 = "resistant"
                    n4 = "enjoyable"
                    n5 = "accessible"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}`
                    break
                    /*
                case '8':
                    n1 = "different"
                    n2 = "impressive"
                    n3 = "resistant"
                    n4 = "enjoyable"
                    n5 = "accessible"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}`
                    break
                case '8':
                    n1 = "different"
                    n2 = "impressive"
                    n3 = "resistant"
                    n4 = "enjoyable"
                    n5 = "accessible"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}`
                    break
                    */
            }
            break
        case "108":
            switch (exercise){
                case "2":
                    n1 = "is"
                    n2 = "being"
                    n3 = "was"
                    n4 = "being"
                    n5 = "been"
                    n6 = "been"
                    n7 = "be"
                    n8 = "be"
                    break
                case "4":
                    n1 = "Chemicals are used to make sugar white."
                    n2 = "Spinach has been attacked by snails."
                    n3 = "Are lights being set up outside the stadium?"
                    n4 = "The new menu hasn't been approved yet."
                    n5 = "Credit cards are not accepted."
                    n6 = "Who is the record for the highest skydive held by?"
                    n7 = "Questions will be answered at the end of the lecture."
                    n8 = "A new cafe has been opened in town."
                    break
            }
        case "109":
            switch (exercise){
                case '6':
                    n1 = "herself"
                    n2 = "myself"
                    n3 = "yourself"
                    n4 = "yourselves"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
                case '7':
                    n1 = "are served with"
                    n2 = "was bungee jumping"
                    n3 = "enjoyed ourselves"
                    n4 = "has been told"
                    n5 = "will the restaurant be bought"
                    n6 = "has been held here"
                    n7 = "was broken by"
                    n8 = "by herself"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
                    break
            }
            break
        case "110":
            switch (exercise){
                case '2':
                    n1 = "B"
                    n2 = "C"
                    n3 = "A"
                    n4 = "B"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
                case '3':
                    n1 = "They came from Australia."
                    n2 = "Calendula tincture takes a long time to prepare because it must be left you 4 weeks to be ready to use."
                    n3 = "THIS QUESTION REQUIRES PERSONAL OPINION"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}`
                    break
                case '4':
                    n1 = "treated"
                    n2 = "pour"
                    n3 = "imported"
                    n4 = "inhale"
                    n5 = "preserve"
                    n6 = "Put"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}`
                    break
            }
            break
        case "111":
            switch (exercise){
                case '5':
                    n1 = "muscle"
                    n2 = "stomach"
                    n3 = "bathroom"
                    n4 = "glass"
                    n5 = "cider"
                    n6 = "skin"
                    n7 = "health"
                    n8 = "home"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
                    break
                case '6':
                    n1 = "treatment"
                    n2 = "rash"
                    n3 = "wound"
                    n4 = "fever"
                    n5 = "pain"
                    n6 = "GP"
                    n7 = "infection"
                    n8 = "tablet"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
                    break
                case '7':
                    n1 = "have been used as natural remedies for some time."
                    n2 = "to treat minor skin problems,"
                    n3 = "in lots of British gardens."
                    n4 = "from other countries."
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                    break
                case '8':
                    n1 = "T"
                    n2 = "F"
                    n3 = "T"
                    ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}`
                    break
            }
            break
            case "112": 
                switch (exercise){
                    case '1':
                        n1 = "F"
                        n2 = "F"
                        n3 = "T"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}`
                        break
                    case '2':
                        n1 = "C"
                        n2 = "E"
                        n3 = "D"
                        n4 = "A"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                        break
                }
                break
            case "113":
                switch (exercise){
                    case '2':
                        n1 = "C"
                        n2 = "B"
                        n3 = "A"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}`
                        break
                    case '4':
                        n1 = "What seems to be the problem?"
                        n2 = "I think I've broken my ankle."
                        n3 = "It's very painful."
                        n4 = "I want to send you for..."
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                        break
                    case '5':
                        n1 = "B, ii"
                        n2 = "A, ii"
                        ans.innerHTML = `1.${n1}, 2.${n2}`
                        break
                    case '6':
                        n1 = "A"
                        n2 = "C"
                        ans.innerHTML = `1.${n1}, 2.${n2}`
                        break
                }
                break
            case "114":
                switch (exercise){
                    case '1':
                        n1 = "an opinion essay"
                        n2 = "my teacher"
                        n3 = "formal style"
                        n4 = "the introduction"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                        break
                    case '2':
                        n1 = "C"
                        n2 = "D"
                        n3 = "B"
                        n4 = "A"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                        break
                    case '3':
                        n1 = "Example arguements: red meat can cause heart disease because of high fat-content, animals are given hormones and antibiotics that are harmful for us"
                        n2 = "Example arguements: animals kept in poor conditions, not free to walk around/have natural light, killing methods make animals suffer"
                        ans.innerHTML = `1.${n1}, 2.${n2}`
                        break
                    case '5':
                        n1 = "In my opinion, organic food may cost more, but it's worth the money."
                        n2 = "I believe that too much food is wasted nowadays."
                        n3 = "I strongly believe that children should be encouraged to eat more fruit and vegetables and fewer sweets."
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}`
                        break
                }
                break
            case "115":
                switch (exercise){
                    case '6':
                        n1 = "Vegetarianism is a healthier choice to eating meat."
                        n2 = "Animals used for food are treated badly."
                        ans.innerHTML = `1.${n1}, 2.${n2}`
                        break
                    case '8':
                        n1 = "B"
                        n2 = "D"
                        n3 = "A"
                        n4 = "C"
                        ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}`
                        break
                }
                break
    } //NEED TO ADD LANGUAGE & SKILLS IN FOCUS 6 AND LATER
}