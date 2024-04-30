let n1="",n2="",n3="",n4="",n5="",n6=""
let n7="",n8="",n9="",n10="",n11="",n12=""
let n13="",n14="",n15="",n16="",n17="",n18=""
let n19="",n20="",n21="",n22="",n23="",n24="",n25=""
function b1level(){
    const part = document.getElementById('partb1').value
    const task = document.getElementById('taskb1').value
    var ans = document.getElementById('answerer')
    switch (part){
        case '1':
            switch (task){
                case '1':
                    n1="A"
                    n2="B"
                    n3="B"
                    n4="A"
                    n5="B"
                    n6="A"
                    n7="C"
                    n8="C"
                    break
                case '2':
                    n1="A"
                    n2="B"
                    n3="C"
                    n4="A"
                    n5="A"
                    n6="B"
                    n7="A"
                    n8="C"
                    break
                case '3':
                    n1="B"
                    n2="C"
                    n3="A"
                    n4="B"
                    n5="B"
                    n6="A"
                    n7="A"
                    n8="C"
                break
                case '4':
                    n1="B"
                    n2="A"
                    n3="A"
                    n4="B"
                    n5="B"
                    n6="C"
                    n7="C"
                    n8="C"
                break
                case '5':
                    n1="B"
                    n2="B"
                    n3="A"
                    n4="A"
                    n5="C"
                    n6="C"
                    n7="A"
                    n8="A"
                break
                case '6':
                    n1="B"
                    n2="B"
                    n3="A"
                    n4="B"
                    n5="A"
                    n6="C"
                    n7="C"
                    n8="B"
                break
                case '7':
                    n1="A"
                    n2="B"
                    n3="C"
                    n4="B"
                    n5="B"
                    n6="A"
                    n7="A"
                    n8="C"
                break
                case '8':
                    n1="C"
                    n2="A"
                    n3="B"
                    n4="C"
                    n5="B"
                    n6="A"
                    n7="C"
                    n8="A"
                break
                case '9':
                    n1="B"
                    n2="C"
                    n3="A"
                    n4="A"
                    n5="C"
                    n6="A"
                    n7="B"
                    n8="B"
                break
                case '10':
                    n1="B"
                    n2="B"
                    n3="C"
                    n4="A"
                    n5="C"
                    n6="A"
                    n7="B"
                    n8="C"
                break
                case '11':
                    n1="C"
                    n2="B"
                    n3="C"
                    n4="A"
                    n5="C"
                    n6="B"
                    n7="A"
                    n8="B"
                break
                case '12':
                    n1="B"
                    n2="C"
                    n3="C"
                    n4="B"
                    n5="A"
                    n6="B"
                    n7="A"
                    n8="C"
                break
            }
            ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
            break
        case '2':
            switch (task){
                    case '1':
                        n1="B"
                        n2="C"
                        n3="D"
                        n4="D"
                        n5="B"
                        n6="C"
                        n7="A"
                        n8="D"
                        break
                    case '2':
                        n1="A"
                        n2="B"
                        n3="B"
                        n4="D"
                        n5="A"
                        n6="A"
                        n7="C"
                        n8="D"
                        break
                    case '3':
                        n1="D"
                        n2="D"
                        n3="A"
                        n4="C"
                        n5="A"
                        n6="B"
                        n7="B"
                        n8="A"
                    break
                    case '4':
                        n1="C"
                        n2="D"
                        n3="A"
                        n4="B"
                        n5="B"
                        n6="D"
                        n7="B"
                        n8="B"
                    break
                    case '5':
                        n1="C"
                        n2="C"
                        n3="A"
                        n4="A"
                        n5="B"
                        n6="A"
                        n7="B"
                        n8="B"
                    break
                    case '6':
                        n1="C"
                        n2="C"
                        n3="B"
                        n4="B"
                        n5="B"
                        n6="C"
                        n7="B"
                        n8="A"
                    break
                    case '7':
                        n1="C"
                        n2="D"
                        n3="B"
                        n4="D"
                        n5="A"
                        n6="D"
                        n7="B"
                        n8="C"
                    break
                    case '8':
                        n1="D"
                        n2="C"
                        n3="D"
                        n4="A"
                        n5="C"
                        n6="C"
                        n7="A"
                        n8="C"
                    break
                    case '9':
                        n1="C"
                        n2="C"
                        n3="B"
                        n4="D"
                        n5="A"
                        n6="B"
                        n7="C"
                        n8="A"
                    break
                    case '10':
                        n1="B"
                        n2="D"
                        n3="B"
                        n4="A"
                        n5="C"
                        n6="A"
                        n7="C"
                        n8="C"
                    break
                    case '11':
                        n1="D"
                        n2="C"
                        n3="A"
                        n4="B"
                        n5="B"
                        n6="A"
                        n7="A"
                        n8="C"
                    break
                    case '12':
                        n1="C"
                        n2="A"
                        n3="D"
                        n4="B"
                        n5="C"
                        n6="A"
                        n7="A"
                        n8="D"
                    break
            }
            ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
            break
        case '1.2':
            switch (task){
                case '1':
                    n1="C"
                    n2="A"
                    n3="B"
                    n4="A"
                    n5="C"
                    n6="A"
                    n7="C"
                    n8="B"
                    break
                case '2':
                    n1="B"
                    n2="C"
                    n3="A"
                    n4="C"
                    n5="A"
                    n6="B"
                    n7="C"
                    n8="A"
                    break
                case '3':
                    n1="B"
                    n2="A"
                    n3="B"
                    n4="A"
                    n5="C"
                    n6="A"
                    n7="B"
                    n8="B"
                break
                case '4':
                    n1="B"
                    n2="B"
                    n3="A"
                    n4="A"
                    n5="C"
                    n6="B"
                    n7="C"
                    n8="A"
                break
                case '5':
                    n1="A"
                    n2="C"
                    n3="C"
                    n4="B"
                    n5="C"
                    n6="C"
                    n7="A"
                    n8="A"
                break
                case '6':
                    n1="C"
                    n2="A"
                    n3="C"
                    n4="B"
                    n5="B"
                    n6="A"
                    n7="C"
                    n8="C"
                break
                case '7':
                    n1="B"
                    n2="C"
                    n3="A"
                    n4="B"
                    n5="B"
                    n6="C"
                    n7="A"
                    n8="C"
                break
                case '8':
                    n1="C"
                    n2="A"
                    n3="B"
                    n4="A"
                    n5="A"
                    n6="C"
                    n7="A"
                    n8="B"
                break
                case '9':
                    n1="B"
                    n2="B"
                    n3="C"
                    n4="A"
                    n5="B"
                    n6="A"
                    n7="C"
                    n8="C"
                break
                case '10':
                    n1="A"
                    n2="B"
                    n3="C"
                    n4="A"
                    n5="C"
                    n6="B"
                    n7="C"
                    n8="B"
                break
                case '11':
                    n1="A"
                    n2="C"
                    n3="B"
                    n4="A"
                    n5="B"
                    n6="A"
                    n7="C"
                    n8="B"
                break
                case '12':
                    n1="C"
                    n2="A"
                    n3="B"
                    n4="A"
                    n5="B"
                    n6="C"
                    n7="A"
                    n8="C"
                break
                case '13':
                    n1="C"
                    n2="A"
                    n3="B"
                    n4="C"
                    n5="A"
                    n6="A"
                    n7="C"
                    n8="B"
                break
                case '14':
                    n1="A"
                    n2="C"
                    n3="A"
                    n4="B"
                    n5="C"
                    n6="A"
                    n7="A"
                    n8="C"
                break
                case '15':
                    n1="A"
                    n2="C"
                    n3="B"
                    n4="C"
                    n5="A"
                    n6="C"
                    n7="A"
                    n8="B"
                break
            }
            ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
            break
        case '2.2':
            switch (task){
                        case '1':
                            n1="B"
                            n2="C"
                            n3="D"
                            n4="B"
                            n5="A"
                            n6="B"
                            n7="C"
                            n8="D"
                            break
                        case '2':
                            n1="C"
                            n2="C"
                            n3="C"
                            n4="D"
                            n5="B"
                            n6="D"
                            n7="B"
                            n8="D"
                            break
                        case '3':
                            n1="B"
                            n2="D"
                            n3="C"
                            n4="C"
                            n5="C"
                            n6="D"
                            n7="C"
                            n8="C"
                        break
                        case '4':
                            n1="B"
                            n2="A"
                            n3="C"
                            n4="B"
                            n5="B"
                            n6="D"
                            n7="D"
                            n8="B"
                        break
                        case '5':
                            n1="C"
                            n2="A"
                            n3="C"
                            n4="B"
                            n5="C"
                            n6="C"
                            n7="D"
                            n8="B"
                        break
                        case '6':
                            n1="C"
                            n2="A"
                            n3="D"
                            n4="C"
                            n5="C"
                            n6="A"
                            n7="B"
                            n8="D"
                        break
                        case '7':
                            n1="C"
                            n2="A"
                            n3="D"
                            n4="C"
                            n5="A"
                            n6="B"
                            n7="B"
                            n8="D"
                        break
                        case '8':
                            n1="C"
                            n2="B"
                            n3="C"
                            n4="B"
                            n5="D"
                            n6="C"
                            n7="A"
                            n8="C"
                        break
                        case '9':
                            n1="A"
                            n2="B"
                            n3="D"
                            n4="A"
                            n5="B"
                            n6="A"
                            n7="C"
                            n8="D"
                        break
                        case '10':
                            n1="C"
                            n2="B"
                            n3="A"
                            n4="C"
                            n5="C"
                            n6="D"
                            n7="A"
                            n8="D"
                        break
                        case '11':
                            n1="B"
                            n2="D"
                            n3="A"
                            n4="B"
                            n5="D"
                            n6="B"
                            n7="D"
                            n8="B"
                        break
                        case '12':
                            n1="C"
                            n2="D"
                            n3="D"
                            n4="B"
                            n5="C"
                            n6="D"
                            n7="A"
                            n8="C"
                        break
                        case '13':
                            n1="B"
                            n2="C"
                            n3="D"
                            n4="C"
                            n5="A"
                            n6="B"
                            n7="A"
                            n8="B"
                        break
                        case '14':
                            n1="A"
                            n2="C"
                            n3="A"
                            n4="C"
                            n5="A"
                            n6="D"
                            n7="A"
                            n8="C"
                        break
                        case '15':
                            n1="D"
                            n2="C"
                            n3="B"
                            n4="A"
                            n5="B"
                            n6="C"
                            n7="A"
                            n8="C"
                        break
            }
            ans.innerHTML = `1.${n1}, 2.${n2}, 3.${n3}, 4.${n4}, 5.${n5}, 6.${n6}, 7.${n7}, 8.${n8}`
            break
        }
}