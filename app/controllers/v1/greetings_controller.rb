class V1::GreetingsController < ApplicationController
    def index
        render json: { :things => [
            {
                :name => 'some-things',
                :guid => '4drg4-4t45t'
            }
        ]}.to_json
    end
end