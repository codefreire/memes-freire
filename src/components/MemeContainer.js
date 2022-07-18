import React from "react";
import Meme from "./Meme";
import Title from "./Title";
import getMemesByPopular from "../services/memes";

class MemeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            memes: [],
            isFetch: true
        }
    }

    async componentDidMount() {
        const responseJson = await getMemesByPopular()
        this.setState({ memes: responseJson.data.memes, isFetch: false })
    }

    render() {
        const { isFetch, memes } = this.state

        return (
            <>
                <Title>Memes de&nbsp;<a target="_blank" href="https://imgflip.com/api">imgflip api</a></Title>

                {
                    isFetch && 'Loading...'
                }

                {
                    (!isFetch && !memes.length) && 'No memes founded u.u try another search'
                }

                <section className="memes-container">
                    {
                        memes.map((meme) => <Meme
                            imageUrl={meme.url}
                            name={meme.name}
                            key={meme.id}
                        />)
                    }
                </section>
            </>

        )
    }
}

export default MemeContainer