var GIPHY_API_URL = 'https://api.giphy.com',
GIPHY_PUB_KEY = '9af6d92a7b0d48a4812c800105edda24';

App = React.createClass({
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },
    getGif: function(searchingText) {
        return new Promise((resolve, reject) => {
            let url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = () => {
                if (xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText).data; // 4.
                    let gif = {  // 5.
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    resolve(gif);
                } else {
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = () => {
                reject(new Error(
                   `XMLHttpRequest Error: ${this.statusText}`));
            };
            xhr.send();
        });
    },
    handleSearch: function (searchingText) {
        this.setState({
            loading: true
        });
        this.getGif(searchingText)
        .then(gif => {
            this.setState({
                loading: false,
                gif: gif,
                searchingText: searchingText
            });
        })
        .catch(error => console.error('Something went wrong', reason));
        // this.getGif(searchingText, function (gif) {
        //     this.setState({
        //         loading: false,
        //         gif: gif,
        //         searchingText: searchingText
        //     });
        // }.bind(this));
    },
    render: function (){
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };

        return (
            <div style= {styles}>
                <h1>Wyszukiwarka GIFow</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch} />
                <Gif 
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    }
});