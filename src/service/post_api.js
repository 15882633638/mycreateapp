import {get} from 'axios'
export function getPosts(){
    return get('http://localhost:8080')
}