package com.voting.votingapp.models;

import jakarta.persistence.Embeddable;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@NoArgsConstructor
public class OptionVote {
    private String voteOption;
    private Long voteCount = 0L;
}
