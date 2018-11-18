let test = JSON.parse(JSON.stringify(
    {
        "pagination": {},
        "data": [
            {
                "id": "1881930097045463605_8661035776",
                "user": {
                    "id": "8661035776",
                    "full_name": "UpGrad Education",
                    "profile_picture": "https://scontent.cdninstagram.com/vp/3c9e4d717f555ee53833199c0229adca/5C82C817/t51.2885-19/s150x150/41947221_725500971134637_2241518422187835392_n.jpg",
                    "username": "upgrad_sde"
                },
                "images": {
                    "thumbnail": {
                        "width": 150,
                        "height": 150,
                        "url": "https://scontent.cdninstagram.com/vp/274a81ce959c6f76cb57e7dd8252409f/5C69EDEF/t51.2885-15/e35/s150x150/40065586_291750928104318_6687688803440573826_n.jpg"
                    },
                    "low_resolution": {
                        "width": 320,
                        "height": 320,
                        "url": "https://scontent.cdninstagram.com/vp/c98d4b8f5d231b41f0d124d9d8720e8a/5C79161F/t51.2885-15/e35/s320x320/40065586_291750928104318_6687688803440573826_n.jpg"
                    },
                    "standard_resolution": {
                        "width": 640,
                        "height": 640,
                        "url": "https://scontent.cdninstagram.com/vp/f8575fe22780861c9e5b1496dd8d022d/5C76E1AD/t51.2885-15/e35/40065586_291750928104318_6687688803440573826_n.jpg"
                    }
                },
                "created_time": "1538563571",
                "caption": {
                    "id": "17954579236158231",
                    "text": "Join PG Diploma in Software Development & Blockchain Specialisation\n#upgrad #softwaredevelopment #blockchain",
                    "created_time": "1538563571",
                    "from": {
                        "id": "8661035776",
                        "full_name": "UpGrad Education",
                        "profile_picture": "https://scontent.cdninstagram.com/vp/3c9e4d717f555ee53833199c0229adca/5C82C817/t51.2885-19/s150x150/41947221_725500971134637_2241518422187835392_n.jpg",
                        "username": "upgrad_sde"
                    }
                },
                "user_has_liked": true,
                "likes": {
                    "count": 9
                },
                "tags": [
                    "upgrad",
                    "softwaredevelopment",
                    "blockchain"
                ],
                "filter": "Normal",
                "comments": {
                    "count": 2
                },
                "type": "image",
                "link": "https://www.instagram.com/p/Bod9XPOguI1/",
                "location": {
                    "latitude": 18.994746816057,
                    "longitude": 72.816448671552,
                    "name": "UpGrad",
                    "id": 989955182
                },
                "attribution": null,
                "users_in_photo": []
            },
            {
                "id": "1881927760809722278_8661035776",
                "user": {
                    "id": "8661035776",
                    "full_name": "UpGrad Education",
                    "profile_picture": "https://scontent.cdninstagram.com/vp/3c9e4d717f555ee53833199c0229adca/5C82C817/t51.2885-19/s150x150/41947221_725500971134637_2241518422187835392_n.jpg",
                    "username": "upgrad_sde"
                },
                "images": {
                    "thumbnail": {
                        "width": 150,
                        "height": 150,
                        "url": "https://scontent.cdninstagram.com/vp/31025d3163dc0b3b9ddc53dc26454827/5C6F4388/t51.2885-15/e35/c76.0.168.168/s150x150/42068718_234691977403714_5384130318906342190_n.jpg"
                    },
                    "low_resolution": {
                        "width": 320,
                        "height": 168,
                        "url": "https://scontent.cdninstagram.com/vp/264891fda0ead211ff443947b53f6be3/5C728F1A/t51.2885-15/e35/42068718_234691977403714_5384130318906342190_n.jpg"
                    },
                    "standard_resolution": {
                        "width": 320,
                        "height": 168,
                        "url": "https://scontent.cdninstagram.com/vp/264891fda0ead211ff443947b53f6be3/5C728F1A/t51.2885-15/e35/42068718_234691977403714_5384130318906342190_n.jpg"
                    }
                },
                "created_time": "1538563293",
                "caption": {
                    "id": "17970140986104448",
                    "text": "Join UpGrad’s got talent! Enrol yourself in a program and upgrade your skills!\n#upgrad #upskill #talent #transformation",
                    "created_time": "1538563293",
                    "from": {
                        "id": "8661035776",
                        "full_name": "UpGrad Education",
                        "profile_picture": "https://scontent.cdninstagram.com/vp/3c9e4d717f555ee53833199c0229adca/5C82C817/t51.2885-19/s150x150/41947221_725500971134637_2241518422187835392_n.jpg",
                        "username": "upgrad_sde"
                    }
                },
                "user_has_liked": true,
                "likes": {
                    "count": 4
                },
                "tags": [
                    "upgrad",
                    "transformation",
                    "upskill",
                    "talent"
                ],
                "filter": "Normal",
                "comments": {
                    "count": 0
                },
                "type": "image",
                "link": "https://www.instagram.com/p/Bod81PcAoGm/",
                "location": null,
                "attribution": null,
                "users_in_photo": []
            },
            
        ],
        "meta": {
            "code": 200
        }
    }

));


let moviesData = Array.from(test.data)
export default moviesData;